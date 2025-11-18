
export interface Priority {
    name: string;
    color: string;
}

export interface Roles {
    name: string;
    icon: string;
}

export interface Sizes {
    name: string;
    size: string;
}

export interface TaskData {
    title: string
    description: string
    date: string
    deadline: string
    size: string
    priority:  string ,
    role: string
}

export interface Task {
    id: number
    title: string
    description: string
    date: string
    deadline: string
    size: Sizes
    priority:  Priority,
    role: Roles
}