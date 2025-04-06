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

        stage('Ejecutar pruebas') {
            steps {
                bat 'npm test'
            }
        }

        stage('Generar reporte') {
            steps {
                // Guarda salida de tests en archivo, incluso si fallan
                bat 'npm test > test-report.txt || exit 0'
                archiveArtifacts artifacts: 'test-report.txt', allowEmptyArchive: true
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