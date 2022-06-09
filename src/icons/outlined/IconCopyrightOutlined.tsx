// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CopyrightOutlinedSvg from '@ant-design/icons-svg/es/asn/CopyrightOutlined';

export interface CopyrightOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCopyrightOutlined: CopyrightOutlinedIconType = (props, context) => (
    <Icon name='CopyrightOutlined' {...{ ...props, ...context.attrs }} icon={CopyrightOutlinedSvg} />
);

IconCopyrightOutlined.displayName = 'IconCopyrightOutlined';

export default IconCopyrightOutlined;