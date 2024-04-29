import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import { Container } from "react-bootstrap";
import Counter from "@/components/Counter";
import CounterWReducer from "@/components/CounterWReducer";


export default function Home() {
  return (
    <Container>
      <Counter/>
      <CounterWReducer/>
    </Container>
  );
}
