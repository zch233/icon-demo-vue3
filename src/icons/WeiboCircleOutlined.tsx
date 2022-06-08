// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import WeiboCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/WeiboCircleOutlined';

export interface WeiboCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const WeiboCircleOutlined: WeiboCircleOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={WeiboCircleOutlinedSvg} />;

WeiboCircleOutlined.displayName = 'WeiboCircleOutlined';

export default FunctionalComponent;