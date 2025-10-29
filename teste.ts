type props = {
  inputs: number[];
  alpha: number;
};

function sumNumbers(nums: number[]): number {
  return nums.reduce((acc, val) => acc + val, 0);
}

function BetaFunction({ inputs, alpha }: props) {
  return Math.floor(Math.tanh(sumNumbers(inputs) / 1000) * 10 * alpha);
}

function Results() {
  const aInputs = [[10000], [3000], [-123000]];
  const bInputs = [[10000], [1000], [-456000]];

  const alphaCoefficients = [5];
}

Results();
