// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FilePptOutlinedSvg from '@ant-design/icons-svg/lib/asn/FilePptOutlined';

export interface FilePptOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FilePptOutlined: FilePptOutlinedIconType = (props, context) => <Icon name='FilePptOutlined' {...{ ...props, ...context.attrs }} icon={FilePptOutlinedSvg} />;

FilePptOutlined.displayName = 'FilePptOutlined';

export default FilePptOutlined;