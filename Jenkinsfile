pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                nodejs('NodeSA'){
                    sh 'npm install'
                    sh 'npm start &'
                }
            }
        }
        stage('Testeo') {
            steps {
                echo 'Testeando..'
                nodejs('NodeSA'){
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
