
participants_limit <= 100;



examples = {
    free [
      zoom [
        participants_limit <= 100;

        time_limit for(1/1) = code(404);
        time_limit for(3+) = 40 min;
      ];

      google_meet [
        participants_limit <= 100;

        time_limit for(3+) = 60 min;
        time_limit for(1:1) = 24 hours;
      ];

      webex [
        participants_limit <= 100;

        time_limit = 40 min;
      ];

      microsoft_teams [
        participants_limit <= 100;

        time_limit for(3+) = 60 min;
        time_limit for(1:1) = 30 hours;
      ];
      
      telegram [
        participants_limit <= 200;
      ];

      whatsapp [
        participants_limit <= 32;
      ];

      discord [
        listeners_limit = more(participants_limit <= 25);
      ];

      signal [
        participants_limit <= 50;
      ];
    ];

    paid [
        zoom [
            plans=[pro,bussiness,enterprise],
            features=[
                time_limit for(3+) = 30 hours;
                participants_limit <= range(300,1000);

                cloud_recording;
                webinars;
            ];
            price = from(15).per(month).per(user).
        ];
        google_meet [
            plans=["Business Starter", "Business Standard", "Business Plus", "Enterprise"];
            features=[
                time_limit for(3+) = 24 hours;
                participants_limit <= range(150,500,1000);
            ];

            price = [
                starter=from(7).per(month),
                standart=from(14).per(month),
                plus=from(22).per(month),
            ];
        ];

        webex [
            plans = ["Meet", "Suite", "Enterprise"];
            
            features=[
                time_limit for(3+) = 24 hours;
                participants_limit <= range(200,1000);
            ];

            price = [
                from(12).per(month),
                from(144).per(year),
            ];
        ];

        microsoft_teams [
            plans=[
                "Microsoft 365 Personal",
                "Business",
                "Enterprise"
            ];

            features=[
                participants_limit <= active(300);
            ];

            price = essentials=from(4).per(month);
        ];

        discord [
            plans=[
                "Nitro Basic",
                "Nitro"
            ];
            features = [
                "HD-стриминг (до 4K/60 FPS на Nitro)",
            ];
            price = [
                basic = exact(3).per(month);
                nitro = exact(10).per(month);
            ];

        ];
    ]
};
  