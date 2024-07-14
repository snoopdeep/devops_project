pipeline {
    agent any

    environment {
        NODEJS_HOME = tool name: 'NodeJS 20.14.0'
        PATH = "${env.NODEJS_HOME}\\bin;${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', 
                url: 'https://github.com/kashyap142/see-devops.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    def dockerImage = docker.build('kkashyap142/see-devops:latest')
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                bat 'kkashyap142/see-devops:latest'
            }
        }

        stage('Run Docker Container') {
            steps {
                bat 'docker run -d -p 3000:3000 kkashyap142/see-devops:latest'
            }
        }
    }

    post {
        success {
            echo 'Build Successful!'
        }
        failure {
            echo 'Build Failed!'
        }
    }
}
