// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import DownOutlinedSvg from '@ant-design/icons-svg/lib/asn/DownOutlined';

export interface DownOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const DownOutlined: DownOutlinedIconType = (props, context) => <Icon name='DownOutlined' {...{ ...props, ...context.attrs }} icon={DownOutlinedSvg} />;

DownOutlined.displayName = 'DownOutlined';

export default DownOutlined;