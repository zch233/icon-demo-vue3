// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FolderTwoToneSvg from '@ant-design/icons-svg/lib/asn/FolderTwoTone';

export interface FolderTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FolderTwoTone: FolderTwoToneIconType = (props, context) => <Icon name='FolderTwoTone' {...{ ...props, ...context.attrs }} icon={FolderTwoToneSvg} />;

FolderTwoTone.displayName = 'FolderTwoTone';

export default FolderTwoTone;