import RecentWorksDefault from "./recentWorks/RecentWorksDefault";
import RecentWorksFitness from "./recentWorks/RecentWorksFitness";
import RecentWorksLawyer from "./recentWorks/RecentWorksLawyer";
import RecentWorksMusician from "./recentWorks/RecentWorksMusician";
import RecentWorksWriter from "./recentWorks/RecentWorksWriter";

const RecentWorks = ({ user }) => {
	switch (user) {
		case "trainer":
			return <RecentWorksFitness />;
		case "lawyer":
			return <RecentWorksLawyer />;
		case "writer":
			return <RecentWorksWriter />;
		case "musician":
			return <RecentWorksMusician />;
		default:
			return <RecentWorksDefault />;
	}
};
export default RecentWorks;
