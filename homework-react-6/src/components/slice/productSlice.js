import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        {
          _id: "64536f04eab30863dd46940e",
          name: "enim labore anim",
          price: "$282",
          picture: "http://placehold.it/300x250",
          color: "brown",
          description: "Pariatur pariatur amet sit nulla culpa commodo minim enim cupidatat aute quis do nostrud exercitation. Proident irure ut Lorem fugiat nostrud minim occaecat aliqua irure ea elit Lorem cillum labore. Nisi ullamco reprehenderit nostrud quis culpa excepteur amet in sint occaecat aliquip id enim officia. Consequat sunt pariatur eiusmod ut ad esse sint laboris sit veniam nisi officia aliqua. Officia irure mollit excepteur cupidatat. Lorem incididunt in et eu.\r\n",
          category: "dolore",
          tags: [
            "Lorem",
            "nisi",
            "consectetur",
            "eu",
            "occaecat",
            "proident",
            "occaecat"
          ]
        },
        {
          _id: "64536f04ea0243ca72c00e81",
          name: "est labore do",
          price: "$141",
          picture: "http://placehold.it/300x250",
            color: "blue",
          description: "In aliqua nisi consectetur velit occaecat labore esse officia ad consequat aute enim anim magna. Ipsum eiusmod incididunt commodo minim minim deserunt aute sunt cillum consequat. Ullamco labore est voluptate quis qui culpa duis dolore ut voluptate duis ullamco. Ipsum incididunt reprehenderit sit laborum. Irure eu nostrud ea minim amet. Sint ipsum ea consequat sint amet ea sit id esse ex nulla consectetur exercitation.\r\n",
          category: "cillum",
          tags: [
            "velit",
            "excepteur",
            "reprehenderit",
            "duis",
            "exercitation",
            "voluptate",
            "dolor"
          ]
        },
        {
          _id: "64536f0484aeb386b40a0aad",
          name: "dolore labore ex",
          price: "$166",
          picture: "http://placehold.it/300x250",
          color: "green",
          description: "Ut consequat proident est anim pariatur exercitation cupidatat deserunt eiusmod aute. Et qui commodo nisi dolor do incididunt magna enim officia labore aliquip ad et eu. Reprehenderit veniam aliqua officia excepteur aliqua in nostrud. Lorem aute occaecat amet ex enim. Occaecat in commodo tempor et tempor pariatur et minim. Irure culpa reprehenderit et commodo aliquip quis enim consectetur sit nostrud consequat.\r\n",
          category: "reprehenderit",
          tags: [
            "sit",
            "consequat",
            "ad",
            "ut",
            "anim",
            "in",
            "cupidatat"
          ]
        },
        {
          _id: "64536f047f59ed75eccd0c67",
          name: "enim proident tempor",
          price: "$244",
          picture: "http://placehold.it/300x250",
          color: "blue",
          description: "Aliqua consectetur pariatur ea tempor sunt amet consequat ullamco aliqua. Commodo adipisicing nostrud culpa aliquip sint. Qui eu ex nulla tempor enim. Sit cillum nulla cillum sit tempor culpa sint voluptate ut proident laborum duis sit. Eu sint est id ad ut voluptate non. Lorem pariatur reprehenderit ea minim minim id. Pariatur sit pariatur est ea sunt.\r\n",
          "category": "ullamco",
          "tags": [
            "sunt",
            "duis",
            "est",
            "consequat",
            "est",
            "ea",
            "dolore"
          ]
        },
        {
          _id: "64536f0470b48cc7b2af1071",
          name: "fugiat qui eu",
          price: "$269",
          picture: "http://placehold.it/300x250",
          color: "green",
          description: "Adipisicing aliquip laborum anim eiusmod occaecat non laborum id do consequat irure ea anim esse. Irure ut pariatur consequat ut. Excepteur aliquip adipisicing id mollit laborum consequat incididunt. In dolor veniam reprehenderit ullamco elit. Ad ad nulla duis excepteur non pariatur sint occaecat nostrud qui consectetur nostrud ea. Magna et aute nostrud quis commodo.\r\n",
          category: "ad",
            tags: [
            "dolore",
            "et",
            "proident",
            "do",
            "ut",
            "laborum",
            "velit"
          ]
        },
        {
          _id: "64536f0460a31803610a37d1",
          name: "excepteur velit officia",
          price: "$142",
          picture: "http://placehold.it/300x250",
          color: "green",
          description: "Ullamco aliqua irure incididunt mollit anim. Cupidatat do incididunt eu qui labore cupidatat ipsum. Sint labore voluptate incididunt deserunt amet tempor proident id officia. Elit eiusmod consequat in mollit nisi occaecat deserunt aliquip labore aliquip.\r\n",
          category: "ut",
          tags: [
            "consectetur",
            "dolore",
            "velit",
            "id",
            "do",
            "magna",
            "id"
          ]
        },
        {
          _id: "64536f048d2caf78d4ebf058",
          name: "labore elit dolore",
          price: "$293",
          picture: "http://placehold.it/300x250",
          color: "brown",
          description: "Magna aliqua ullamco consectetur cillum amet Lorem laboris aliquip laborum id. Reprehenderit eu commodo consectetur pariatur exercitation dolore aliqua. Aute sunt enim aliquip est do magna et reprehenderit laboris consequat non mollit dolor.\r\n",
          category: "aute",
          tags: [
            "nulla",
            "incididunt",
            "nostrud",
            "do",
            "nulla",
            "proident",
            "in"
          ]
        }
      ]
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
    }
});


export default productSlice.reducer;