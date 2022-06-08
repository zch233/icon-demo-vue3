// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import WeiboOutlinedSvg from '@ant-design/icons-svg/lib/asn/WeiboOutlined';

export interface WeiboOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const WeiboOutlined: WeiboOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={WeiboOutlinedSvg} />;

WeiboOutlined.displayName = 'WeiboOutlined';

export default WeiboOutlined;