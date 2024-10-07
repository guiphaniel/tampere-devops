<?php
// IP address information
$server_ip = $_SERVER['SERVER_ADDR'];

// List of running processes
$processes_raw = shell_exec('ps -ax');
$process_lines = explode("\n", trim($processes_raw)); // Split lines

// Extract the headers from the first line
$headers = preg_split('/\s+/', trim(array_shift($process_lines))); // First line is headers

$processes = [];
foreach ($process_lines as $line) {
  // Split each process line into fields based on whitespace
  $fields = preg_split('/\s+/', trim($line), count($headers));

  // Map headers to values, creating an associative array (dict) for each process
  $process = array_combine($headers, $fields);

  // Append the dictionary to the list of processes
  $processes[] = $process;
}

// Available disk space
$disk_free_space = trim(shell_exec("df -h / --output=avail | tail -n 1"));

// Time since last boot
$uptime = trim(shell_exec('uptime -p'));

// Create an associative array (dict)
$data = [
  'ipAddress' => $server_ip,
  'runningProcesses' => $processes,
  'availableDiskSpace' => $disk_free_space,
  'timeSinceLastBoot' => $uptime
];

// Output the array as JSON
header('Content-Type: application/json');
echo json_encode($data, JSON_PRETTY_PRINT);
