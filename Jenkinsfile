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

        stage('Serve') {
            steps {
                bat 'serve -s build'
            }
        }

        // stage('Deploy') {
        //     steps {
        //         // Deployment steps can be added here if needed
        //     }
        // }
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