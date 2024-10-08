FROM php:8-apache

RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf
RUN a2enmod headers
RUN sed -i '/<Directory \/var\/www\/>/,/<\/Directory>/ s/AllowOverride None/AllowOverride All/' /etc/apache2/apache2.conf
RUN service apache2 restart

COPY src/ /var/www/html/