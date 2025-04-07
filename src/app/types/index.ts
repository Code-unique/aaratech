export type featureWork = {
  sys: {
    id: string;
  };
  imagesCollection: {
    items: {
      url: string;
      title: string;
    }[];
  };
  projectTitle: string;
  projectDescription?: string; // Optional or remove the '?' if it's required
};


export type workDetail = {
  sys: {
    id: string;
  };
  projectTitle: string;
  projectDescription: string;
  clientName: string;
  projectDate: string;
  clientWebsite: string;
  clientProjectImage: {
    url: string;
    title: string;
  };
  theChallengeDescription: string;
  theChallengeImage: {
    url: string;
    title: string;
  };
  theOutcomeDescription: string;
  theOutcomeImage: {
    url: string;
    title: string;
  };

  imagesCollection: {
    items: {
      url: string;
      title: string;
    }[];
  };
  otherProjectsCollection: {
    item: featureWork[];
  };
};
