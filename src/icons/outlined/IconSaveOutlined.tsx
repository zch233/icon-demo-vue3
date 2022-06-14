// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SaveOutlinedSvg from 'icon-base/es/asn/SaveOutlined';

export interface SaveOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconSaveOutlined: SaveOutlinedIconType = (props, context) => (
    <Icon name='SaveOutlined' {...{ ...props, ...context.attrs }} icon={SaveOutlinedSvg} />
);

IconSaveOutlined.displayName = 'IconSaveOutlined';

export default IconSaveOutlined;