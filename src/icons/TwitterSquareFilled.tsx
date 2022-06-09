// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import TwitterSquareFilledSvg from '@ant-design/icons-svg/lib/asn/TwitterSquareFilled';

export interface TwitterSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const TwitterSquareFilled: TwitterSquareFilledIconType = (props, context) => <Icon name='TwitterSquareFilled' {...{ ...props, ...context.attrs }} icon={TwitterSquareFilledSvg} />;

TwitterSquareFilled.displayName = 'TwitterSquareFilled';

export default TwitterSquareFilled;