// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FileFilledSvg from '@ant-design/icons-svg/lib/asn/FileFilled';

export interface FileFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FileFilled: FileFilledIconType = (props, context) => <Icon name='FileFilled' {...{ ...props, ...context.attrs }} icon={FileFilledSvg} />;

FileFilled.displayName = 'FileFilled';

export default FileFilled;