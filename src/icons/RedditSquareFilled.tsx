// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import RedditSquareFilledSvg from '@ant-design/icons-svg/lib/asn/RedditSquareFilled';

export interface RedditSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const RedditSquareFilled: RedditSquareFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={RedditSquareFilledSvg} />;

RedditSquareFilled.displayName = 'RedditSquareFilled';

export default FunctionalComponent;