pipeline {
    agent any

    stages {
        stage('Clonar repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/OmerSolis/Pruebafinalv1.git'
            }
        }

        stage('Instalar dependencias') {
            steps {
                bat 'npm install'
            }
        }

        stage('Iniciar servidor') {
            steps {
                bat 'start /B npm start'
                bat 'ping 127.0.0.1 -n 6 > nul'
                bat 'curl http://localhost:3000/users'
            }
        }
    }

    post {
        success {
            echo '🚀 El pipeline se ejecutó correctamente. La API está funcionando.'
        }
        failure {
            echo '❌ Falló una etapa del pipeline.'
        }
    }
}