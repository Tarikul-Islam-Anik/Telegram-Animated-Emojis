"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GetEmojis from "./get-emojis";

const list = [
  {
    name: "Smileys",
    value: "smileys",
  },
  {
    name: "People",
    value: "people",
  },
  {
    name: "Animals & Nature",
    value: "animals-and-nature",
  },
  {
    name: "Food & Drink",
    value: "food-and-drink",
  },
  {
    name: "Activity",
    value: "activity",
  },
  {
    name: "Travel & Places",
    value: "travel-and-places",
  },
  {
    name: "Objects",
    value: "objects",
  },
  {
    name: "Symbols",
    value: "symbols",
  },
  {
    name: "Flags",
    value: "flags",
  },
];

const EmojiList = () => {
  return (
    <Tabs
      defaultValue="smileys"
      className="items-center justify-center flex flex-col space-y-8 md:max-w-7xl"
    >
      <TabsList className="w-[55%] md:w-auto touch-none select-none flex justify-start overflow-x-scroll overflow-y-hidden scroll-mt-4">
        {list.map((item) => (
          <TabsTrigger key={item.value} value={item.value}>
            {item.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {list.map((item) => (
        <TabsContent key={item.value} value={item.value}>
          {
            <GetEmojis
              category={item.name.replaceAll(" ", "%20").replaceAll("&", "and")}
            />
          }
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default EmojiList;
