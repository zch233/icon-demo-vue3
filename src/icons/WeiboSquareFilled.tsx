// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import WeiboSquareFilledSvg from '@ant-design/icons-svg/lib/asn/WeiboSquareFilled';

export interface WeiboSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const WeiboSquareFilled: WeiboSquareFilledIconType = (props, context) => <Icon name='WeiboSquareFilled' {...{ ...props, ...context.attrs }} icon={WeiboSquareFilledSvg} />;

WeiboSquareFilled.displayName = 'WeiboSquareFilled';

export default WeiboSquareFilled;