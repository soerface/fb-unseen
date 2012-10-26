this.manifest = {
  'name': 'FB unseen',
  'icon': '../../icon48.png',
  'settings': [
    {
      'tab': i18n.get('general'),
      'group': i18n.get('interface'),
      'name': 'show_mark_as_read',
      'type': 'checkbox',
      'label': i18n.get('show_mark_as_read')
    },
    {
      'tab': i18n.get('general'),
      'group': i18n.get('blocks'),
      'name': 'block_chat_seen',
      'type': 'checkbox',
      'label': i18n.get('block_chat_seen')
    },
    {
      'tab': i18n.get('general'),
      'group': i18n.get('blocks'),
      'name': 'block_typing_indicator',
      'type': 'checkbox',
      'label': i18n.get('block_typing_indicator')
    },
    {
      'tab': i18n.get('general'),
      'group': '',
      'type': 'description',
      'text': 'Diese Chrome Erweiterung benutzt Google Analytics, einen Webanalysedienst der Google Inc. („Google“). Google Analytics verwendet sog. „Cookies“, Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Im Falle der Aktivierung der IP-Anonymisierung auf dieser Webseite, wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringenDie im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: <a href="http://tools.google.com/dlpage/gaoptout?hl=de" target="_blank">http://tools.google.com/dlpage/gaoptout?hl=de</a>.'
    }
    // TODO
    // {
    //   'tab': i18n.get('general'),
    //   'group': i18n.get('blocks'),
    //   'name': 'block_group_seen',
    //   'type': 'checkbox',
    //   'label': i18n.get('block_group_seen')
    // }
    /*,
        {
            'tab': i18n.get('information'),
            'group': i18n.get('login'),
            'name': 'username',
            'type': 'text',
            'label': i18n.get('username'),
            'text': i18n.get('x-characters')
        },
        {
            'tab': i18n.get('information'),
            'group': i18n.get('login'),
            'name': 'password',
            'type': 'text',
            'label': i18n.get('password'),
            'text': i18n.get('x-characters-pw'),
            'masked': true
        },
        {
            'tab': i18n.get('information'),
            'group': i18n.get('login'),
            'name': 'myDescription',
            'type': 'description',
            'text': i18n.get('description')
        },
        {
            'tab': i18n.get('information'),
            'group': i18n.get('logout'),
            'name': 'myCheckbox',
            'type': 'checkbox',
            'label': i18n.get('enable')
        },
        {
            'tab': i18n.get('information'),
            'group': i18n.get('logout'),
            'name': 'myButton',
            'type': 'button',
            'label': i18n.get('disconnect'),
            'text': i18n.get('logout')
        },
        {
            'tab': 'Details',
            'group': 'Sound',
            'name': 'noti_volume',
            'type': 'slider',
            'label': 'Notification volume:',
            'max': 1,
            'min': 0,
            'step': 0.01,
            'display': true,
            'displayModifier': function (value) {
                return (value * 100).floor() + '%';
            }
        },
        {
            'tab': 'Details',
            'group': 'Sound',
            'name': 'sound_volume',
            'type': 'slider',
            'label': 'Sound volume:',
            'max': 100,
            'min': 0,
            'step': 1,
            'display': true,
            'displayModifier': function (value) {
                return value + '%';
            }
        },
        {
            'tab': 'Details',
            'group': 'Food',
            'name': 'myPopupButton',
            'type': 'popupButton',
            'label': 'Soup 1 should be:',
            'options': [
                ['hot', 'Hot and yummy'],
                ['cold']
            ]
        },
        {
            'tab': 'Details',
            'group': 'Food',
            'name': 'myListBox',
            'type': 'listBox',
            'label': 'Soup 2 should be:',
            'options': [
                ['hot', 'Hot and yummy'],
                ['cold']
            ]
        },
        {
            'tab': 'Details',
            'group': 'Food',
            'name': 'myRadioButtons',
            'type': 'radioButtons',
            'label': 'Soup 3 should be:',
            'options': [
                ['hot', 'Hot and yummy'],
                ['cold']
            ]
        }*/
  ]/*,
  'alignment': [
    [
      'show_mark_as_read',
    ]
    /*[
      'noti_volume',
      'sound_volume'
    ]
  ]*/
};
