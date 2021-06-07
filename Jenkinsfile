pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                nodejs('practica1'){
                    sh 'npm install'
                    sh 'npm start &'
                }
            }
        }
        stage('Testeo') {
            steps {
                echo 'Testeando..'
                nodejs('practica1'){
                    sh 'npm test'
                }
            }
        }
        stage('Deployment') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
