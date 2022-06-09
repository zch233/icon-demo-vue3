// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import UnderlineOutlinedSvg from '@ant-design/icons-svg/lib/asn/UnderlineOutlined';

export interface UnderlineOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const UnderlineOutlined: UnderlineOutlinedIconType = (props, context) => <Icon name='UnderlineOutlined' {...{ ...props, ...context.attrs }} icon={UnderlineOutlinedSvg} />;

UnderlineOutlined.displayName = 'UnderlineOutlined';

export default UnderlineOutlined;