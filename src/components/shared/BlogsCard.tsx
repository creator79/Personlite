"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/aceternity/3d-card.tsx";

// Define interface for your API response data
interface CardData {
  id: number;
  title: string;
  tag_list: string[];
  social_image: string;
  description: string;
  url: string;
}

export default function ThreeDCardDemo() {
  const [cards, setCards] = useState<CardData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dev.to/api/articles?username=olawanle_joel"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data: CardData[] = await response.json();
        console.log(data);
        setCards(data);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="flex flex-row flex-wrap gap-x-5 justify-center text-centre ">
      <div className="my-4 ">
        <Image
          src="https://media.tenor.com/I3RjM4xQO0kAAAAi/monitors-typing.gif"
          width={100}
          height={100}
          className="w-20 h-20"
          alt="loading"
        />

        <h1 className="text-4xl font-bold text-pink-600 pb-4">
          Blogs<span className="text-white">.read()</span>
        </h1>
        <span className="text-xl font-semibold mt-6">
          Some Technical Blogs that are close to my heart ♡
        </span>
        <p className="font-mono opacity-40">
          Below are some of my favorite Blogs that I've written in my free time,
          these include experience and personal learning.
        </p>
      </div>
      {cards.map((card) => (
        <CardContainer key={card.id} className="inter-var ">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {card.title}
            </CardItem>

            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={card.social_image}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-black text-sm max-w-sm mt-5 dark:text-white"
            >
              {card.tag_list.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 dark:bg-gray-600 py-1 px-3 rounded-full text-sm m-1"
                >
                  {tag}
                </span>
              ))}
            </CardItem>

            <div className="flex justify-between items-center mt-10">
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {card.description}
              </CardItem>

              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                onClick={() => window.open(card.url, "_blank")}
              >
                Read Full →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}
