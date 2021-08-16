import { ReflectLintFeedback } from "../feedbacks";

type Lints = ReadonlyArray<ReflectLintFeedback>;

export interface ITreeLike<T = string> {
  id: string;
  name: string;
  type: T;
  children?: ITreeLike[];
}

export interface LintTree<T = string> extends ITreeLike<T> {
  children: LintTree[];
  feedbacks: Lints;
}

/** converts lint result + origin tree data as lint tree data */
export function asTree<T = string>(
  lints: Lints,
  tree: ITreeLike<T>
): LintTree<T> {
  const feedbacks = [];
  let children;
  if (tree.children) {
    const childmap = tree.children.map((c) => {
      return asTree(lints, c);
    });
    children = childmap;
  }

  return <LintTree<T>>{
    ...tree,
    children: children,
    feedbacks: feedbacks,
  };
}
