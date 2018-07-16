#!groovy

node {
  def now = new Date()
  def timestamp = now.format("yyMMdd.HHmm", TimeZone.getTimeZone('UTC'))

  stage("inspect_environment_variables") {
    sh "echo Jenkinsfile reading environment"
    sh "echo -------------------------------"
    sh "echo ${env.CHOICEATS_DB_HOST}"
    sh "echo ${env.CHOICEATS_DB_NAME}"
    sh "echo ${env.CHOICEATS_DB_PORT}"
    sh "echo ${env.CHOICEATS_DB_USER}"
    sh "echo ${env.CHOICEATS_DB_PASS}"
    sh "echo ${env.CHOICEATS_NETW}"
  }

  stage("run_database") {
    sh "echo running database not yet implemented"
  }

  // stage("create_docker_network") {
  //   sh "[ ! \"$(docker network ls --filter name=${env.CHOICEATS_NETW} | grep ${env.CHOICEATS_NETW})\" ] && docker network create ${env.CHOICEATS_NETW}"
  // }

  stage("build_app") {

    checkout scm

    def appDockerArgs = """\
      --build-arg DB_HOST=${env.CHOICEATS_DB_HOST}
      --build-arg DB_NAME=${env.CHOICEATS_DB_NAME}
      --build-arg DB_PORT=${env.CHOICEATS_DB_PORT}
      --build-arg DB_USER=${env.CHOICEATS_DB_USER}
      --build-arg DB_PASS=${env.CHOICEATS_DB_PASS}
      -f Dockerfile ./""".stripIndent()

    def appDockerArgsOneline = "--build-arg DB_HOST=${env.CHOICEATS_DB_HOST} --build-arg DB_NAME=${env.CHOICEATS_DB_NAME} --build-arg DB_PORT=${env.CHOICEATS_DB_PORT} --build-arg DB_USER=${env.CHOICEATS_DB_USER} --build-arg DB_PASS=${env.CHOICEATS_DB_PASS} -f Dockerfile ./"

    def appContainerName="choiceats-app-${timestamp}"
    def appImageTag="choiceats/app:${timestamp}"

    def customImage = docker.build("${appImageTag}", "${appDockerArgsOneline}")
  }

  stage("remove_old_containers") {
    sh "docker ps --all --filter name=choiceats-app | grep -o \"choiceats-app.*\" | while read -r line ; do echo \"Processing \$line\" && (docker stop \$line || true) && (docker rm \$line || true}; done"
  }

  stage("run_app") {
    sh "docker run --rm --net ${env.CHOICEATS_NETW} -p 80:4000 -dit --name ${appContainerName} ${appImageTag}"
  }

  // list of all choiceats-app
  // docker ps --all --filter name=choiceats-app | grep -o "choiceats-app.*"
}
