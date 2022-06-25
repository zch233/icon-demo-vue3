// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import EditTwoToneSvg from 'icon-base/es/asn/EditTwoTone';

export interface EditTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconEditTwoTone: EditTwoToneIconType = (props, context) => <Icon name='EditTwoTone' {...{ ...props, ...context.attrs }} icon={EditTwoToneSvg} />;

IconEditTwoTone.displayName = 'IconEditTwoTone';
IconEditTwoTone.theme = 'twotone';
IconEditTwoTone.originName = 'edit';

export default IconEditTwoTone;
