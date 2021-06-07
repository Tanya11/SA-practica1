pipeline {
    agent any

    stages {
        stage('Construir') {
            steps {
                echo 'Construyendo..'
                nodejs('NodeSA'){
                    sh 'npm install'
                    sh 'npm start &'
                }
            }
        }
        stage('Prueba') {
            steps {
                echo 'Probando..'
                nodejs('NodeSA'){
                    sh 'npm test'
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
