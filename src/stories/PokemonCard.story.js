import React from "react";
import { View } from "react-native";
import Card from "../components/PokemonCard";

import { storiesOf } from "@storybook/react-native";

storiesOf("PokemonCard", module)
    .addDecorator(getStory => (
        <View style={{ flex: 1, alignItems: "center", }}>{getStory()}</View>
    ))
    .add("default", () => (
        <Card

            action={() => {
                console.log("clicked!");
            }}
        />
    ),
        {
            notes: { markdown: "Markdown text" }
        }
    )
