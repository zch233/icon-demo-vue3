// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import WeiboSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/WeiboSquareOutlined';

export interface WeiboSquareOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const WeiboSquareOutlined: WeiboSquareOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={WeiboSquareOutlinedSvg} />;

WeiboSquareOutlined.displayName = 'WeiboSquareOutlined';

export default WeiboSquareOutlined;