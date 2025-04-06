pipeline {
    agent any

    stages {
        stage('Clonar repositorio') {
            steps {
                git 'https://github.com/tu-usuario/tu-repo.git'
            }
        }

        stage('Instalar dependencias') {
            steps {
                sh 'npm install'
            }
        }

        stage('Iniciar servidor (opcional)') {
            steps {
                sh 'nohup npm start &'
                sh 'sleep 2'
            }
        }

        stage('Ejecutar pruebas') {
            steps {
                sh 'npm test'
            }
        }

        stage('Generar reporte') {
            steps {
                sh 'npm test > test-report.txt || true'
                archiveArtifacts artifacts: 'test-report.txt', allowEmptyArchive: true
            }
        }
    }

    post {
        always {
            echo 'Pipeline terminado.'
        }
        failure {
            echo 'Falló alguna etapa del pipeline.'
        }
    }
}