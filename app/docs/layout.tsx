import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  console.log("source.pageTree", source.pageTree);
  return (
    <DocsLayout
      tree={{
        name: "Introduction",
        children: [
          {
            type: "page",
            name: "Introdução",
            url: "/docs",
          },
          {
            type: "folder",
            name: "Front-End",
            children: [
              {
                type: "page",
                name: "Introdução",
                url: "/docs/frontEnd/introduction",
              },
              {
                type: "page",
                name: "Príncipios do React",
                url: "/docs/frontEnd/reactPrinciples",
              },
              {
                type: "page",
                name: "Boas práticas gerais",
                url: "/docs/frontEnd/goodPractices",
              },
              {
                type: "page",
                name: "Tanstack",
                url: "/docs/frontEnd/tanstack",
              },
              {
                type: "page",
                name: "Arquitetura baseada em Features",
                url: "/docs/frontEnd/featureBasedArchitecture",
              },
            ],
          },
          {
            type: "folder",
            name: "Conceitos",
            children: [
              {
                type: "page",
                name: "Paradigms",
                url: "/docs/programmingParadigms",
              },
              {
                type: "folder",
                name: "Clean Code",
                children: [
                  {
                    type: "page",
                    url: "/docs/cleanCode/introduction",
                    name: "Introdução",
                  },
                  {
                    type: "page",
                    url: "/docs/cleanCode/functionsAndClasses",
                    name: "Funções e Classes",
                  },
                  {
                    type: "page",
                    url: "/docs/cleanCode/comments",
                    name: "Commenting",
                  },
                  {
                    type: "page",
                    url: "/docs/cleanCode/errorHandling",
                    name: "Error Handling",
                  },
                  {
                    type: "page",
                    url: "/docs/cleanCode/cohesionAndCoupling",
                    name: "Reducing Complexity",
                  },
                  {
                    type: "page",
                    url: "/docs/cleanCode/automatedTesting",
                    name: "Automated Testing",
                  },
                  {
                    type: "page",
                    url: "/docs/cleanCode/cleanCodeAndParadigms",
                    name: "Clean code & Paradigms",
                  },
                ],
              },
              {
                type: "folder",
                name: "Principles",
                children: [
                  {
                    type: "folder",
                    name: "SOLID",
                    children: [
                      {
                        type: "page",
                        url: "/docs/solid/SRP",
                        name: "SRP",
                      },
                      {
                        type: "page",
                        url: "/docs/solid/OCP",
                        name: "OCP",
                      },
                      {
                        type: "page",
                        url: "/docs/solid/LSP",
                        name: "LSP",
                      },
                      {
                        type: "page",
                        url: "/docs/solid/ISP",
                        name: "ISP",
                      },
                      {
                        type: "page",
                        url: "/docs/solid/DIP",
                        name: "DIP",
                      },
                    ],
                  },
                  {
                    type: "folder",
                    name: "Other principles",
                    children: [
                      {
                        type: "page",
                        url: "/docs/morePrinciples",
                        name: "KISS, DRY, SoC...",
                      },
                    ],
                  },
                ],
              },
              {
                type: "folder",
                name: "Design Patterns",
                children: [
                  {
                    type: "page",
                    name: "Introduction",
                    url: "/docs/designPatterns",
                  },
                  {
                    type: "folder",
                    name: "Creational Patterns",
                    children: [
                      {
                        type: "page",
                        name: "Factory Method",
                        url: "/docs/designPatterns/creationalPatterns/factoryMethod",
                      },
                      {
                        type: "page",
                        name: "Abstract Factory",
                        url: "/docs/designPatterns/creationalPatterns/abstractFactory",
                      },
                      {
                        type: "page",
                        name: "Builder",
                        url: "/docs/designPatterns/creationalPatterns/builder",
                      },
                      {
                        type: "page",
                        name: "Prototype",
                        url: "/docs/designPatterns/creationalPatterns/prototype",
                      },
                      {
                        type: "page",
                        name: "Singleton",
                        url: "/docs/designPatterns/creationalPatterns/singleton",
                      },
                    ],
                  },
                  {
                    type: "folder",
                    name: "Structural Patterns",
                    children: [
                      {
                        type: "page",
                        name: "Adapter",
                        url: "/docs/designPatterns/structuralPatterns/adapter",
                      },
                      {
                        type: "page",
                        name: "Bridge",
                        url: "/docs/designPatterns/structuralPatterns/bridge",
                      },
                      {
                        type: "page",
                        name: "Composite",
                        url: "/docs/designPatterns/structuralPatterns/composite",
                      },
                      {
                        type: "page",
                        name: "Decorator",
                        url: "/docs/designPatterns/structuralPatterns/decorator",
                      },
                      {
                        type: "page",
                        name: "Facade",
                        url: "/docs/designPatterns/structuralPatterns/facade",
                      },
                      {
                        type: "page",
                        name: "Flyweight",
                        url: "/docs/designPatterns/structuralPatterns/flyweight",
                      },
                      {
                        type: "page",
                        name: "Proxy",
                        url: "/docs/designPatterns/structuralPatterns/proxy",
                      },
                    ],
                  },
                  {
                    type: "folder",
                    name: "Behavioral Patterns",
                    children: [
                      {
                        type: "page",
                        name: "Chain of Responsibility",
                        url: "/docs/designPatterns/behavioralPatterns/chainOfResponsibility",
                      },
                      {
                        type: "page",
                        name: "Command",
                        url: "/docs/designPatterns/behavioralPatterns/command",
                      },
                      {
                        type: "page",
                        name: "Iterator",
                        url: "/docs/designPatterns/behavioralPatterns/iterator",
                      },
                      {
                        type: "page",
                        name: "Interpreter",
                        url: "/docs/designPatterns/behavioralPatterns/interpreter",
                      },
                      {
                        type: "page",
                        name: "Mediator",
                        url: "/docs/designPatterns/behavioralPatterns/mediator",
                      },
                      {
                        type: "page",
                        name: "Memento",
                        url: "/docs/designPatterns/behavioralPatterns/memento",
                      },
                      {
                        type: "page",
                        name: "Observer",
                        url: "/docs/designPatterns/behavioralPatterns/observer",
                      },
                      {
                        type: "page",
                        name: "State",
                        url: "/docs/designPatterns/behavioralPatterns/state",
                      },
                      {
                        type: "page",
                        name: "Strategy",
                        url: "/docs/designPatterns/behavioralPatterns/strategy",
                      },
                      {
                        type: "page",
                        name: "Template Method",
                        url: "/docs/designPatterns/behavioralPatterns/templateMethod",
                      },
                      {
                        type: "page",
                        name: "Visitor",
                        url: "/docs/designPatterns/behavioralPatterns/visitor",
                      },
                    ],
                  },
                ],
              },
              {
                type: "page",
                name: "Testing",
                url: "/docs/testing",
              },
              {
                type: "page",
                name: "Refactoring",
                url: "/docs/refactoring",
              },
              {
                type: "page",
                name: "Linting",
                url: "/docs/linting",
              },
              {
                type: "page",
                name: "Tooling",
                url: "/docs/tooling",
              },
            ],
          },
        ],
      }}
      {...baseOptions}
    >
      {children}
    </DocsLayout>
  );
}
