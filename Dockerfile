FROM debian:latest

RUN apt-get update -y
RUN apt-get install -y apache2
RUN apt-get install -y nano
RUN apt-get -y install systemctl
RUN systemctl stop apache2
RUN systemctl start apache2

COPY apache-conf /etc/apache2/apache2.conf
RUN rm /var/www/html/index.html
COPY pagina /var/www/html

EXPOSE 80

CMD ["/usr/sbin/apache2ctl", "-DFOREGROUND"]
