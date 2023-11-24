import { rest } from "msw";

export const handlers = [
  rest.get("/data.json", (req, res, ctx) => {
    const business = [
      {
        name: "Billy The Butcher",
        id: "g3jk6ppJc_NdKKhv1JGa7w",
        url: "https://www.yelp.com/biz/billy-the-butcher-hamburg-2?adjust_creative=nMAD8ywU1QBl_RMSM215Bg&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=nMAD8ywU1QBl_RMSM215Bg",
        phone: "+494057283299",
        display_phone: "+49 40 57283299",
        rating: 4,
        photos: [
          "https://s3-media2.fl.yelpcdn.com/bphoto/RDKmsxZZczP4EiTCB9AYOw/o.jpg",
        ],
        location: {
          address1: "Jungfernstieg 16 - 20",
          city: "Hamburg",
          postal_code: "20354",
          formatted_address:
            "Jungfernstieg 16 - 20\n4. OG\n20354 Hamburg\nGermany",
        },
        reviews: [
          {
            text: "I've had decent lunches at Billy The Butcher a couple of times now. It's what I would describe as a trendy burger joint on the 4th floor of the Alsterhaus...",
            rating: 4,
          },
          {
            text: "We arrived Hamburg at noon and decide to get some burgers before going to the office. This place is pretty close to the city hall and rated well.\n\nI ordered...",
            rating: 4,
          },
          {
            text: "Nice place to have good burger for lunch. Most of personnel speak English which is good. Prices are decent, also I would recommend to share fries with a...",
            rating: 4,
          },
        ],
      },
      {
        name: "Burgerlich",
        id: "to7wdG3gaLjTuykEbpB8qg",
        url: "https://www.yelp.com/biz/burgerlich-hamburg-4?adjust_creative=nMAD8ywU1QBl_RMSM215Bg&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=nMAD8ywU1QBl_RMSM215Bg",
        phone: "+494033441852",
        display_phone: "+49 40 33441852",
        rating: 4,
        photos: [
          "https://s3-media3.fl.yelpcdn.com/bphoto/g87Q_elyu0-J-R8NGaHSAA/o.jpg",
        ],
        location: {
          address1: "Gänsemarkt 43",
          city: "Hamburg",
          postal_code: "20354",
          formatted_address: "Gänsemarkt 43\n20354 Hamburg\nGermany",
        },
        reviews: [
          {
            text: "Just opened location and I'm a big fan. The way the restaurant operates is that there an ipad menus inside every table. You order directly from your table...",
            rating: 5,
          },
        ],
      },
      {
        name: "Friends & Brgrs",
        id: "xtU7_TIM5lr7l1TKljLjNw",
        url: "https://www.yelp.com/biz/friends-und-brgrs-hamburg?adjust_creative=nMAD8ywU1QBl_RMSM215Bg&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=nMAD8ywU1QBl_RMSM215Bg",
        phone: "+494036851152",
        display_phone: "+49 40 36851152",
        rating: 3.5,
        photos: [
          "https://s3-media2.fl.yelpcdn.com/bphoto/d00pot12Gh3eq0fqw-H5Xg/o.jpg",
        ],
        location: {
          address1: "Ballindamm 40",
          city: "Hamburg",
          postal_code: "20095",
          formatted_address: "Ballindamm 40\nFoodSky\n20095 Hamburg\nGermany",
        },
        reviews: [
          {
            text: "I think this is my new go-to burger joint! I ordered the umami burger, hubby got the bacon burger and we got an order of fries with jalapeño mayo to share....",
            rating: 4,
          },
          {
            text: "I just wanted to grab a quick lunch, but had to wait for more than 25 min to get my burger, that was really annoying. The burger was good but quite small...",
            rating: 3,
          },
          {
            text: "Absolutely the best burgers in town!   All fresh ingredients.   Burgers are made fresh- not frozen patties and finally good buns!   Try it !",
            rating: 5,
          },
        ],
      },
    ];

    return res(
      ctx.json({
        data: {
          search: {
            business,
            total: 10,
          },
        },
      }),
    );
  }),
];
