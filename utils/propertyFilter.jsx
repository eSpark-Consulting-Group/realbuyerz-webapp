export function getUniqueProposalStatus(selectedData) {
  const uniqueProposalStatuss = [];
  const seenProposalStatuss = {};

  selectedData?.forEach((proposal) => {
    if (!seenProposalStatuss[proposal.proposalStatus]) {
      uniqueProposalStatuss.push(proposal.proposalStatus);
      seenProposalStatuss[proposal.proposalStatus] = true;
    }
  });

  return uniqueProposalStatuss;
}

export function getFilteredCount(selectedData, proposalStatus) {
  return proposalStatus === 'All'
    ? selectedData.length
    : selectedData.filter(
        (proposal) => proposal.proposalStatus === proposalStatus
      ).length;
}
