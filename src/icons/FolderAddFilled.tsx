// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FolderAddFilledSvg from '@ant-design/icons-svg/lib/asn/FolderAddFilled';

export interface FolderAddFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FolderAddFilled: FolderAddFilledIconType = (props, context) => <Icon name='FolderAddFilled' {...{ ...props, ...context.attrs }} icon={FolderAddFilledSvg} />;

FolderAddFilled.displayName = 'FolderAddFilled';

export default FolderAddFilled;