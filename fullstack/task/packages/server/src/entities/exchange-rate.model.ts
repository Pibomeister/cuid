import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ExchangeRate {
    @Field(() => String)
    public country!: string;

    @Field(() => String)
    public currency!: string;

    @Field(() => Number)
    public amount!: number;

    @Field(() => Number)
    public rate!: number;

    @Field(() => String)
    public code!: string;
}
