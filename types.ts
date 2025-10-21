export interface PromptVariable {
  id: string;
  name: string;
  defaultValue: string;
}

export interface BehaviorDefinition {
  preconditions: string;
  actions: string;
  postconditions: string;
}
