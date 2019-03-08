const questsData = [
  {
    id: 0,
    name: 'Polowanie na ścierwojady',
    ownerName: 'Bartek',
    requirements: '',
    objectives: [
      {action: 'kill', target: 'scavenger', number: 5, desciption: 'Zabij 5 ścierwojadów'},
      {action: 'talk', target: 'Bartek', number: 1, desciption: 'Wróc do Bartka'}
    ],
    reward: {gold: 300, exp: 500},
    dialogToTakeQuest: {
      npcDialog: 'Zlecenie na $1wilki#',
      answers: [
        {
          response: '1) Ok podejmę się tego wyzwania',
          condition: '',
          ifFailConditionTest: {

          },
          consequences: [
            {
              action: 'accept quest',
              value: 'id_01'
            }
          ]
        },
        {
          response: '2) Spadaj pan',
          condition: '',
          ifFailConditionTest: {

          },
          consequences: [
            {
              action: 'end dialog',
              value: ''
            }
          ]
        }
      ]
    },
    dialogsDependentOnQuestState: [
      {
        npcDialog: 'Jak ci idzie sprawa z wilkami?'
      },
      {
        npcDialog: 'Uporałeś się z tą zgrają wilków? O to twoja nagroda.'
      }
    ]
  }
];

export default questsData;
