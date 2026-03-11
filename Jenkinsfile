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
                sh 'npm install'
            }
        }

        stage('Run tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t %DOCKER_IMAGE% .'
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([string(credentialsId: 'dockerhub-credentials', variable: 'DOCKER_PASS')]) {

                    sh 'echo %DOCKER_PASS% | docker login -u dockerhub_username --password-stdin'

                    sh 'docker push %DOCKER_IMAGE%'
                }
            }
        }

    }
}