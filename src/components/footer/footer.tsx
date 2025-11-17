import ScrollStack from '@/components/lightswind/scroll-stack';

const footer = () => {
  const customCards = [
    {
      title: "Custom Card",
      content: (
        <div>
          <h2 className="text-black font-semibold text-2xl">Custom React Content</h2>
          <button>Interactive Element</button>
        </div>
      )
    },
    {
      title: "Custom Card 2",
      content: (
        <div>
          <h2 className="text-black font-semibold text-2xl">Custom React Content</h2>
          <button>Interactive Element</button>
        </div>
      )
    },
    {
      title: "Custom Card 3",
      content: (
        <div>
          <h2 className="text-black font-semibold text-2xl">Custom React Content</h2>
          <button>Interactive Element</button>
        </div>
      )
    }
  ];
  return (
    <ScrollStack
      cards={customCards}
      backgroundColor="#1f2937"
      cardHeight="70vh"
      animationDuration="0.8s"
      sectionHeightMultiplier={4}
    />
  );
}
export default footer;