function projectCreation(input) {
  const name = input[0];
  const countProjects = input[1];
  const hourWork = countProjects * 3;

  console.log(
    `The architect ${name} will need ${hourWork} hours to complete ${countProjects} project/s.`
  );
}

projectCreation(['Sanya', '9']);
