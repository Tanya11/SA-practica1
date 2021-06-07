pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                nodejs('NodeSA'){
                    sh 'npm --version'
                    sh 'npm install'
                    sh 'npm start &'
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
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
