// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import BarsOutlinedSvg from '@ant-design/icons-svg/lib/asn/BarsOutlined';

export interface BarsOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const BarsOutlined: BarsOutlinedIconType = (props, context) => <Icon name='BarsOutlined' {...{ ...props, ...context.attrs }} icon={BarsOutlinedSvg} />;

BarsOutlined.displayName = 'BarsOutlined';

export default BarsOutlined;