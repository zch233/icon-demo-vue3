// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import OneToOneOutlinedSvg from 'icon-base/es/asn/OneToOneOutlined';

export interface OneToOneOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconOneToOneOutlined: OneToOneOutlinedIconType = (props, context) => (
    <Icon name='OneToOneOutlined' {...{ ...props, ...context.attrs }} icon={OneToOneOutlinedSvg} />
);

IconOneToOneOutlined.displayName = 'IconOneToOneOutlined';
IconOneToOneOutlined.theme = 'outlined';
IconOneToOneOutlined.originName = 'one-to-one';

export default IconOneToOneOutlined;
