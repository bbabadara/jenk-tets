pipeline {

    agent any

    environment {
        DOCKER_IMAGE = "bbabadara/test-jenk"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/bbabadara/jenk-tets.git'
            }
        }

        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t %DOCKER_IMAGE% .'
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([string(credentialsId: 'dockerhub-credentials', variable: 'DOCKER_PASS')]) {

                    bat 'echo %DOCKER_PASS% | docker login -u dockerhub_username --password-stdin'

                    bat 'docker push %DOCKER_IMAGE%'
                }
            }
        }

    }
}