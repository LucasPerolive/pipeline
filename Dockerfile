# Usa a imagem oficial do Nginx como base
FROM nginx:alpine

# Define o diretório de trabalho dentro do container (onde o Nginx procura os arquivos)
WORKDIR /usr/share/nginx/html

# Copia todos os arquivos do repositório para o diretório do Nginx
COPY . .

# Expõe a porta 80 (padrão HTTP)
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
