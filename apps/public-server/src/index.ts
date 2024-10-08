import { readableStreamToText } from "bun";
import { Elysia } from "elysia";
import _ from "lodash";

const app = new Elysia().get("/", () => getRoot()).listen(3000);

const getRoot = async () => ({
  service: await getSystemInfo(),
  service2: await (await fetch("http://service2:80")).json(),
});

const getSystemInfo = async () => {
  // IP address information
  const ipAddress = (
    await readableStreamToText(Bun.spawn(["hostname", "-I"]).stdout)
  ).trim();

  // List of running processes
  const processes = await readableStreamToText(Bun.spawn(["ps", "ax"]).stdout);
  const processesFields = processes.split("\n")[0].trim().split(/\s+/);
  const processesValues = processes
    .split("\n")
    .slice(1)
    .filter((line) => line.trim())
    .map((line) => line.trim().split(/\s+/));

  const runningProcesses = processesValues.map((values) =>
    _.zipObject(processesFields, values)
  );

  // Available disk space
  const availableDiskSpace = (
    await readableStreamToText(
      Bun.spawn(["df", "-h", "/", "--output=avail"]).stdout
    )
  )
    .split("\n")[1]
    .trim();

  // Time since last boot
  const timeSinceLastBoot = (
    await readableStreamToText(Bun.spawn(["uptime", "-p"]).stdout)
  ).trim();

  return {
    ipAddress,
    runningProcesses,
    availableDiskSpace,
    timeSinceLastBoot,
  };
};
