import { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";

let works: any[] = [
  {
    title: "Work10",
    id: "b808d455-ffb0-4945-b3a6-f02358f1ab9f",
    activeWork: false,
    startWorkDate: "Saturday, 02/19/2022, 02:30:36",
    endWorkDate: "Saturday, 02/19/2022, 02:30:49",
  },
];

const getWorks = (req: Request, res: Response) => {
  res.send(works);
};

// Create Work
let activeWork = false;

const createWork = (req: Request, res: Response) => {
  console.log(activeWork);

  if (activeWork == false) {
    const work = req.body;
    const activeWork = (work.activeWork = true);
    const startWorkDate = changeDate(new Date());
    works.push({ ...work, id: uuidv4(), activeWork, startWorkDate });

    res
      .status(200)
      .send(
        `The work with the title ${work.title} added to the database and has start ${startWorkDate}`
      );
  } else {
    res.status(200).send(`You already have one active work`);
  }
};

// End Work
const finishWork = (req: Request, res: Response) => {
  const { id } = req.params;

  works.find((work) => {
    if (work.id === id) {
      const endWorkDate = changeDate(new Date());
      work.activeWork = false;
      work.endWorkDate = endWorkDate;
      res.status(200).send(`Work end`);
      console.log(work.activeWork);
    }
  });
};

const getWork = (req: Request, res: Response) => {
  const { id } = req.params;

  const foundWork = works.find((work) => work.id === id);
  res.send(foundWork);
};

// Change Date Method
const changeDate = (date: Date) => {
  return date.toLocaleString(undefined, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "long",
    hour: "2-digit",
    hour12: false,
    minute: "2-digit",
    second: "2-digit",
  });
};

// Get Date
const analysis = (req: Request, res: Response) => {
  let newArray: any[] = [];
  works.forEach((work) => {
    const title = work.title;
    const start = changeDate(work.startWorkDate);
    const end = changeDate(work.endWorkDate);
    newArray.push({ title, start, end });
  });
  res.status(200).send(newArray);
};

export default { analysis, getWork, finishWork, createWork, getWorks };
